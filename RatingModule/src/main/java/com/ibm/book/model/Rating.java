package com.ibm.book.model;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "rating")
public class Rating {

	@Id
	private String _id;
	private int rating;
	
	@Column(unique = true)
	private String userEmail;

	private String bookId;
	
	public Rating() {
		super();
	}

	public Rating(String _id, int rating, String userEmail, String bookId) {
		super();
		this._id = _id;
		this.rating = rating;
		this.userEmail = userEmail;
		this.bookId = bookId;
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getBookId() {
		return bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	@Override
	public String toString() {
		return "Rating [_id=" + _id + ", rating=" + rating + ", userEmail=" + userEmail
				+ ", bookId=" + bookId + "]";
	}
	
}
