# Metis

To deploy the app you will need to export the following variables:
```
SLACK_TOKEN=<token_generated_when_registering_a_new_app>
SLACK_CHANNEL=<slack_channel_id>
```

You will also need to export the appropriate AWS profile which will
contain the necessary variables for the Serverless framework to be able
to interact with AWS:

In `~/.aws/credentials`:
```
[metis-profile]
aws_access_key_id=<access-key>
aws_secret_access_key=<secret-key>
region=<region>
```

Then export it with:
```
export AWS_PROFILE=metis-profile
```

And finally to deploy:
```
serverless deploy
```
You can add the `-v` flag to the above command for a more verbose
output.
