package com.phantom.api.services.exceptions;

public class ObjectnotFoundException extends RuntimeException {

    public ObjectnotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public ObjectnotFoundException(String message) {
        super(message);
    }

}
