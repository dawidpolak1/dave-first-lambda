import { APIGatewayProxyHandler } from 'aws-lambda';

export const davidSayHello: APIGatewayProxyHandler = async(event, context) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from David!',
            }, null, 2),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
            }, null, 2),
        }
    }
}
