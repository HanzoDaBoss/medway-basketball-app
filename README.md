# Medway Basketball API

## A RESTful API that provides the latest basketball player data!

This project is designed to outline building and accesssing a ASP.NET Core Web API, which provides a back-end service for viewing and managing player data in a basketball league. The project was created using C#, MS SQL Server 2022 and Entity Framework Core.

Link to the front-end site: https://medway-basketball.netlify.app

## Features

- CRUD operations for player data.
- Administator registration and login.

## Getting Started

### Clone

```zsh
git clone https://github.com/HanzoDaBoss/medway-basketball-app.git
```

### Navigate to directory

```zsh
cd api
```

### Install Dependencies

```zsh
dotnet restore
```

### Databases

Run this script to update the database schema

```zsh
dotnet ef database update
```

### Run

Run this script to deploy the application locally

```zsh
dotnet run
```

## Minimum Version Requirements

.NET SDK: `v8.0`

MS SQL Server 2022: `v16.0.4125.3`
