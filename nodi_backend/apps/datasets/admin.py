from django.contrib import admin, messages
from django.utils.html import format_html
from django.utils.translation import ngettext
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
    fields = ('name', 'email', 'key', 'approved', 'categories', 'datatype')
    readonly_fields = ('approved',)
    
    date_hierarchy = 'submitted_at'
    list_display = ('name', 'email', 'approved', 'category_list', 'datatype', 'download_link')
    list_filter = ('approved', 'datatype', 'categories')
    actions = ["approve_datasets", "unapprove_datasets"]
    
    def download_link(self, obj):
        return format_html(
            "<a href='{}'>{}</a> ", obj.get_signed_url(), obj.name)
    download_link.short_description = "Download URL"
    
    def approve_datasets(self, request, queryset):
        for dataset in queryset:
            dataset.approve()
        self.message_user(request, ngettext(
            '%d dataset was successfully approved.',
            '%d datasets were successfully approved.',
            queryset.count(),
        ) % queryset.count(), messages.SUCCESS)
    approve_datasets.short_description = "Approve selected Datasets"
    
    def unapprove_datasets(self, request, queryset):
        for dataset in queryset:
            dataset.unapprove()
        self.message_user(request, ngettext(
            '%d dataset was successfully unapproved.',
            '%d datasets were successfully unapproved.',
            queryset.count(),
        ) % queryset.count(), messages.SUCCESS)
    unapprove_datasets.short_description = "Unapprove selected Datasets"
    
    inlines = [
        MetaDataAdminInline,
    ]

admin.site.register(DataSet, DataSetAdmin)
