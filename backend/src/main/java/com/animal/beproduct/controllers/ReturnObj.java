package com.animal.beproduct.controllers;

public class ReturnObj {
    private String message;

    public ReturnObj(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
