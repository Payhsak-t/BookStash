package com.ibm.book.model;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Favourites")

public class Favourites {
	@Id
	private String favId;

	private int userId;
	private String bookId;
	private String email;// token
	private String title;
	private String authors;
	private String smallThumbnail;

	public Favourites() {
		super();
	}

	public Favourites(String favId, int userId, String bookId, String email, String title, String authors,
			String smallThumbnail) {
		super();
		this.favId = favId;
		this.userId = userId;
		this.bookId = bookId;
		this.email = email;
		this.title = title;
		this.authors = authors;
		this.smallThumbnail = smallThumbnail;
	}

	public String getFavId() {
		return favId;
	}

	public void setFavId(String favId) {
		this.favId = favId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getBookId() {
		return bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthors() {
		return authors;
	}

	public void setAuthors(String authors) {
		this.authors = authors;
	}

	public String getSmallThumbnail() {
		return smallThumbnail;
	}

	public void setSmallThumbnail(String smallThumbnail) {
		this.smallThumbnail = smallThumbnail;
	}

	@Override
	public String toString() {
		return "Favourites [favId=" + favId + ", userId=" + userId + ", bookId=" + bookId + ", email=" + email
				+ ", title=" + title + ", authors=" + authors + ", smallThumbnail=" + smallThumbnail + "]";
	}

}
