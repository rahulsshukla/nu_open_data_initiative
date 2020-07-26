from django.contrib import admin
from django.utils.html import format_html
from datasets.models import DataSet, MetaData, DataType, Category

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    fields = ('name', 'popular', 'icon_name')
    list_display = ('name', 'popular', 'icon_name')

admin.site.register(Category, CategoryAdmin)

class MetaDataAdminInline(admin.TabularInline):
    model = MetaData

class DataTypeAdmin(admin.ModelAdmin):
    fields = ('name',)
    list_display = ('name',)

admin.site.register(DataType, DataTypeAdmin)

class DataSetAdmin(admin.ModelAdmin):
    fields = ('name', 'email', 'key', 'categories', 'datatype')
    date_hierarchy = 'submitted_at'
    list_display = ('name', 'email', 'approved', 'category_list', 'datatype', 'download_link')
    list_filter = ('approved', 'datatype', 'categories')
    
    def download_link(self, obj):
        return format_html(
            "<a href='{}'>{}</a> ", obj.get_signed_url(), obj.name)
    download_link.short_description = "Download URL"
    
    inlines = [
        MetaDataAdminInline,
    ]

admin.site.register(DataSet, DataSetAdmin)
