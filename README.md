# URL Shortener Frontend

This project provides a frontend interface for a URL shortening service.

## Table of Contents

- [Scenario](#scenario)
- [Functionality](#functionality)
- [Technical Considerations](#technical-considerations)
- [Deliverables](#deliverables)
- [Evaluation Criteria](#evaluation-criteria)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Starting the Application](#starting-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Scenario

Develop a service that generates short URLs for longer, original URLs.

## Functionality

- The service should accept a long URL as input.
- Implement an algorithm to generate a unique, shorter string representation (e.g., 6 characters) for the long URL.
- This short URL should redirect the user to the original URL when accessed.

## Technical Considerations

- Choose a suitable data structure to store the mapping between original and short URLs.
- Consider techniques to ensure short URLs are unique and don't conflict with existing entries.
- Implement logic to handle potential errors like invalid URLs or exceeding a limit on short URL length.

## Deliverables

- Functional frontend code for the short URL generator service.
- Unit tests covering various scenarios (valid/invalid URLs, short URL uniqueness).
- A brief explanation of the chosen data structure and approach to handling short URL uniqueness.

## Evaluation Criteria

- The frontend will be evaluated for functionality, correctness, efficiency, and adherence to best practices.
- The quality and comprehensiveness of unit tests will be assessed.
- The clarity of the explanation for data structure and uniqueness handling will be reviewed.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-frontend-repo.git
   cd your-frontend-repo

    Install dependencies:

    bash

    npm install
    # or
    yarn install
   ```

## Starting the Application

    Start the frontend:

    bash

    npm start
    # or
    yarn start

    This will start the frontend server.

## Usage

    Open your web browser and go to http://localhost:3000 (or the appropriate port if different).
    Enter a long URL in the input field provided.
    Click on "Shorten URL" to generate a short URL.
    The generated short URL will be displayed. Click on it to test redirection to the original URL.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.
