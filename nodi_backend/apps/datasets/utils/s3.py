import uuid
import os
import boto3

UNAPPROVED_S3_BUCKET = os.environ.get('UNAPPROVED_S3_BUCKET')

def generate_presigned_post(file_type, file_name):
    """
    Generates a presigned post request to upload a dataset
    """
    s3 = boto3.client('s3')

    presigned_post = s3.generate_presigned_post(Bucket = UNAPPROVED_S3_BUCKET, Key = file_name, Fields = {"Content-Type": file_type}, Conditions = [{"Content-Type": file_type}], ExpiresIn = 3600) # 1 hour
    return {
        'data': presigned_post,
        'url': 'https://%s.s3.amazonaws.com/%s' % (UNAPPROVED_S3_BUCKET, file_name),
        'key': file_name
    }
