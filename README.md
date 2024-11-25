# Mock Authentication in Storybook Example

A demonstration of mocking NextAuth.js authentication in Storybook. [Read the full tutorial](https://www.getfishtank.com/insights/mocking-nextauthjs-in-storybook).

## Features

- Next.js application with NextAuth.js authentication
- CredentialsProvider implementation using mock data from JSONPlaceholder API
- Storybook integration with mocked authentication states
- Simulated logged-in and logged-out scenarios

## Getting Started

### Authentication Testing

1. Navigate to `http://localhost:3000/auth/signin`
2. Use one of the sample emails from JSONPlaceholder API:

   - `Sincere@april.biz`
   - `Shanna@melissa.tv`
   - `Nathan@yesenia.net`
   - `Julianne.OConner@kory.org`

   [View full list of sample users](https://github.com/evermeer/AlamofireJsonToObjects/blob/master/AlamofireJsonToObjectsTests/sample_users_array_json)

3. Enter any password (password verification is not implemented in this mock setup)
