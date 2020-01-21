package com.ibm.book.model;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="recommendation")

public class Recommend {
	
	
//	@Indexed(unique=true)
	@Id
	private String recId;
	
	private int userId;
	//+++++++
	private String bookId;
	
	private String email;//token
	private String name;
	private String title;
	private String authors;
	private String smallThumbnail;
	public String getRecId() {
		return recId;
	}
	public void setRecId(String recId) {
		this.recId = recId;
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
	public Recommend(String recId, int userId, String bookId, String email, String name, String title,
			String authors, String smallThumbnail) {
		super();
		this.recId = recId;
		this.userId = userId;
		this.bookId = bookId;
		this.email = email;
		this.name = name;
		this.title = title;
		this.authors = authors;
		this.smallThumbnail = smallThumbnail;
	}
	public Recommend() {
		super();
	}
	@Override
	public String toString() {
		return "Recommend [recId=" + recId + ", userId=" + userId + ", bookId=" + bookId + ", email=" + email
				+ ", name=" + name + ", title=" + title + ", authors=" + authors + ", smallThumbnail=" + smallThumbnail
				+ "]";
	}
	
	
}
