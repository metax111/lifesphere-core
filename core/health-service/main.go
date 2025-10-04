package main

import (
	"fmt"
	"net/http"
)

func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, `{"status":"ok"}`)
}

func main() {
	// Listen on root path because API Gateway rewrites /health to /
	http.HandleFunc("/", healthCheck)

	port := ":4003"
	fmt.Println("Health Service running on", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		panic(err)
	}
}
