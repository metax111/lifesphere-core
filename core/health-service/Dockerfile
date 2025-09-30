# Use official Golang image
FROM golang:1.21-alpine

WORKDIR /app

# Copy go.mod only (go.sum will be generated)
COPY ./go.mod ./

# Download dependencies (generates go.sum)
RUN go mod tidy

# Copy rest of the source code
COPY . .

RUN go build -o health-service .

EXPOSE 8080

CMD ["./health-service"]
