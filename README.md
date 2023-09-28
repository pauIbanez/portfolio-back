# Template-Backend-Typescript

This template crates a fully set up REST API built with express with full server, router and database connection (using mongoDB with mongoose).
Most importantly this template includes full user support.

- MongoDB Database connection.
- Created file structure.
- User authentication with a boilerplate user schema.
- Email service integration for user creation, verification and recovery.
- Error handling.
- 100% tested (unit and integration).
- Automated scripts for build, start, development watch build and testing.

### Users

The template has user support built-in, these are the features it contains:
- User registration with email verification.
- User login.
- User login via OTP via email.
- Password recovery.
- User session auto-refresh.

The user autentication is built with JsonWebToken. The standard token session is 2h, but this is customizable to your needs.

### Testing

This template is fully tested with jest and SonarQube Scanner. This has a 100% coverage in unit tests plus some integration tests for the endpoints.

Testing commands:

- `npm test` This command will run all the tests once.
- `npm run testCov` This command will run al tests and the coverage in watch mode.
- `npm run testCovNoWatch` This command will run all tests and their coverage once.

To run SonarQube Scanner and see a detialed breakdown of the tests, create a new SonarQube project with your prefeered settings. After thar update the sonar-project.propperties file with your project name and you are all set.

To run it simply, asuming u already have SonarQube running, run:

- `sonar-scanner.bat -D"sonar.login=YOUR_SONAR_PROJECT_KEY_HERE"`
