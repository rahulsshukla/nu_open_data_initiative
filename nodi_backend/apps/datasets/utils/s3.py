import uuid
import os
import boto3
from botocore.client import Config
UNAPPROVED_S3_BUCKET = os.environ.get('UNAPPROVED_S3_BUCKET')
APPROVED_S3_BUCKET = os.environ.get('APPROVED_S3_BUCKET')

def generate_presigned_post(file_type, file_name):
    """
    Generates a presigned post request to upload a dataset
    """
    if file_type in {'PDF', 'pdf'}:
        content_type = 'application/pdf'
    elif file_type in {'JSON', 'json'}:
        content_type = 'application/json'
    else:
        content_type = file_type
    s3 = boto3.client('s3', config=Config(signature_version='s3v4'), region_name='us-east-2')

    presigned_post = s3.generate_presigned_post(Bucket = UNAPPROVED_S3_BUCKET, Key = '%s.%s' % (file_name, file_type), Fields = {"Content-Type": content_type}, Conditions = [{"Content-Type": content_type}], ExpiresIn = 3600) # 1 hour
    return {
        'data': presigned_post,
        'url': 'https://%s.s3.amazonaws.com/%s' % (UNAPPROVED_S3_BUCKET, '%s.%s' % (file_name, file_type)),
        'key': '%s.%s' % (file_name, file_type)
    }

def generate_presigned_get(bucket, key, expiration=3600):
    """Generate a presigned URL to share an S3 object

    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """

    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3', config=Config(signature_version='s3v4'), region_name='us-east-2')
    try:
        response = s3_client.generate_presigned_url('get_object', Params={'Bucket': bucket, 'Key': key}, ExpiresIn=expiration)
    except Exception as e:
        return None

    # The response contains the presigned URL
    return response