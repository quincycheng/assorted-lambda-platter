# assorted-lambda-platter
A collection of Lambda functions for learning and testing purposes

# Sample Codes
Note: All lambda functions will be deployed as `zip`, instead of `image` 

## Listing S3 buckets in us-east-1 with various permission settings

| Path                      | Description                                                                     | Link |
| :---                      | :---                                                                            | :--- |
| [s3/101-nodejs14-zip-admin](./s3/101-nodejs14-zip-admin) | Listing all S3 Buckets with excessive permissions: AdministratorAccess | [Link](https://8q7vb5mmsc.execute-api.us-east-1.amazonaws.com/Prod/hello/) |
| [s3/102-nodejs14-zip-leastPrivilege](./s3/102-nodejs14-zip-leastPrivilege) | Listing all S3 Buckets with least privilege | [Link](https://g35lykwllh.execute-api.us-east-1.amazonaws.com/Prod/hello/) |
| [s3/103-nodejs14-zip-notEnoughPermission](./s3/101-nodejs14-zip-notEnoughPermission) | Listing all S3 Buckets with not enough permissions (should not able to execute without permission error) | [Link](https://524bufksec.execute-api.us-east-1.amazonaws.com/Prod/hello/)

## Listing S3 buckets in us-east-1 with various languages

| Path                      | Description                                                                     | Link |
| :---                      | :---                                                                            | :--- |
| [s3/101-nodejs14-zip-admin](./s3/101-nodejs14-zip-admin) | NodeJS 14: Listing all S3 Buckets with excessive permissions: AdministratorAccess |[Link](https://8q7vb5mmsc.execute-api.us-east-1.amazonaws.com/Prod/hello/) |
| [s3/111-nodejs12-zip-admin](./s3/111-nodejs12-zip-admin) | NodeJS 12: Listing all S3 Buckets with excessive permissions: AdministratorAccess | [Link](https://35b9ww5ze7.execute-api.us-east-1.amazonaws.com/Prod/hello/)

| [s3/112-nodejs14-arm64-admin](./s3/112-nodejs14-arm64-admin) | NodeJS 14: Listing all S3 Buckets with excessive permissions: AdministratorAccess |[Link](https://9j0hmgxfw4.execute-api.us-east-1.amazonaws.com/Prod/hello/) |
| [s3/113-nodejs12-arm64-admin](./s3/113-nodejs12-arm64-admin) | NodeJS 12: Listing all S3 Buckets with excessive permissions: AdministratorAccess | [Link](https://m06sej7yja.execute-api.us-east-1.amazonaws.com/Prod/hello/)
