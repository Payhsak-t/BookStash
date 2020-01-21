package com.ibm.book.model;

import java.util.List;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recCount")
public class RecommendCount {
	@Id
	private String bookId;
	private long count;
	private List<String> email;
	private String title;
	private String smallThumbnail;
	private String authors;

	public RecommendCount() {
		super();
	}

	public String getBookId() {
		return bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public List<String> getEmail() {
		return email;
	}

	public void setEmail(List<String> email) {
		this.email = email;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSmallThumbnail() {
		return smallThumbnail;
	}

	public void setSmallThumbnail(String smallThumbnail) {
		this.smallThumbnail = smallThumbnail;
	}

	public String getAuthors() {
		return authors;
	}

	public void setAuthors(String authors) {
		this.authors = authors;
	}

	public RecommendCount(String bookId, long count, List<String> userName, String title, String smallThumbnail,
			String authors) {
		super();
		this.bookId = bookId;
		this.count = count;
		this.email = userName;
		this.title = title;
		this.smallThumbnail = smallThumbnail;
		this.authors = authors;
	}

	@Override
	public String toString() {
		return "RecommendCount [bookId=" + bookId + ", count=" + count + ", email=" + email + ", title=" + title
				+ ", smallThumbnail=" + smallThumbnail + ", authors=" + authors + "]";
	}
}