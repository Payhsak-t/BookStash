package com.ibm.book.service;

import java.util.List;
import com.ibm.book.model.Recommend;
import com.ibm.book.model.RecommendCount;

public interface RecommendService {
	public Recommend saveRecommendation(Recommend b);

	public Recommend getRecommendationById(String recId);

	public List<Recommend> getAll();

	void delete(String recId);

	public List<RecommendCount> getBookCount();

	public List<Recommend> getByBookId(String bookId);
	
	public List<Recommend> getByEmailId(String emailId);
}