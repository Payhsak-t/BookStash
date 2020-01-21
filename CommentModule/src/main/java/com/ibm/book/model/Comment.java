package com.ibm.book.model;

import javax.persistence.Column;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comment")
public class Comment {
	@Id
	private String _id;
	private String comment;

	@Column(unique = true)
	private String userEmail;

	private String bookId;

	public Comment() {
		super();
	}

	public Comment(String id, String comment, String userEmail, String bookId) {
		super();
		this._id = id;
		this.comment = comment;
		this.userEmail = userEmail;
		this.bookId = bookId;
	}

	public String getCommentId() {
		return _id;
	}

	public void setCommentId(String id) {
		this._id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
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
		return "Comment [_id=" + _id + ", comment=" + comment + ", userEmail=" + userEmail + ", bookId=" + bookId + "]";
	}

}