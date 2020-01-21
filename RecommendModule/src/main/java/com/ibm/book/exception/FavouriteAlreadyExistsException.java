package com.ibm.book.exception;

public class FavouriteAlreadyExistsException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public FavouriteAlreadyExistsException() {
		super();
	}

	public FavouriteAlreadyExistsException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FavouriteAlreadyExistsException(String message, Throwable cause) {
		super(message, cause);
	}

	public FavouriteAlreadyExistsException(String message) {
		super(message);
	}

	public FavouriteAlreadyExistsException(Throwable cause) {
		super(cause);
	}

	
}
