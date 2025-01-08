
AWS Serverless App 

Overview
This project is a personal resume website for Nikhil, a Product Manager & Analytics Expert. The site is hosted on a custom domain and features an interactive view counter powered by AWS Lambda and DynamoDB.

Features
Personal Resume: Displaying professional experience, education, skills, and certifications.
Interactive View Counter: Each time the page is loaded, a view counter is updated using an AWS Lambda function and stored in a DynamoDB table.

Responsive Design: Built with HTML and CSS to ensure compatibility across different devices.

Technologies Used

Frontend:
HTML, CSS, JavaScript

Backend:
AWS Lambda
DynamoDB
Boto3 (Python)

Hosting:
Custom domain hosted on AWS

How It Works
View Counter
AWS Lambda Function: A Python-based AWS Lambda function increments a view count stored in a DynamoDB table each time the page is loaded.

The function retrieves the current view count from the DynamoDB table.
It increments the count and updates the table.
The updated count is returned as a JSON response.
JavaScript Integration: The JavaScript code on the website fetches the view count from the Lambda function using a fetch request and displays it on the page.

CORS Handling
The Access-Control-Allow-Origin header in the Lambda function was configured to match the specific domain to ensure security and proper CORS handling.
Project Structure
bash
Copy code
├── index.html # Main HTML file
├── styles.css # CSS for styling
├── script1.js # JavaScript for interactive features
└── lambda_function.py# Python code for AWS Lambda function
Setup Instructions
Prerequisites
AWS account
Domain configured with Route 53 (or any other DNS provider)
Basic understanding of HTML, CSS, JavaScript, and AWS services
Deployment

Frontend:

Upload index.html, styles.css, and script1.js to your hosting service.
Ensure your domain is properly configured to point to the hosting server.

Backend:

Deploy the lambda_function.py code as an AWS Lambda function.
Create a DynamoDB table with the following structure:
Table Name: myaamazonbucket
Partition Key: id (String)
Add an item with id = '0' and Views = 0 (or any initial value).
Ensure the Lambda function has the necessary permissions to access DynamoDB.

CORS Configuration
CORS was disabled in the final deployment due to issues with multiple origins. However, it's recommended to handle CORS securely in production environments.

Troubleshooting
CORS Errors: Ensure that the Access-Control-Allow-Origin header in the Lambda function is correctly set to the domain of your website.
View Counter Not Updating: Check the CloudWatch logs for the Lambda function to troubleshoot any issues with DynamoDB access or updates.

Future Improvements
Add more interactivity and animations to the resume page.
Implement a contact form with email notifications.
Secure the view counter with proper CORS settings.
