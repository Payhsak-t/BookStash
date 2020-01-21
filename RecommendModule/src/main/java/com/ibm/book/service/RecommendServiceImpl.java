package com.ibm.book.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

import com.ibm.book.model.Recommend;
import com.ibm.book.model.RecommendCount;
import com.ibm.book.repository.RecommendRepository;

@Service
public class RecommendServiceImpl implements RecommendService {
	@Autowired
	RecommendRepository rs;
	@Autowired
	MongoTemplate mongoTemplate;

	@Override
	public Recommend saveRecommendation(Recommend b) {
		Recommend r = rs.save(b);
		return r;
	}

	@Override
	public Recommend getRecommendationById(String recId) {
		Recommend o = rs.findByRecId(recId);
		if (o != null)
			return o;
		else
			return null;
	}

	@Override
	public List<Recommend> getAll() {
		List<Recommend> list = rs.findAll();
		return list;
	}

	@Override
	public void delete(String recId) {
		rs.deleteByRecId(recId);
	}

	@Override
	public List<RecommendCount> getBookCount() {
		Aggregation agg = newAggregation(group("bookId").count().as("count"),
				project("count").and("bookId").previousOperation(), sort(Sort.Direction.DESC, "count"));
		// Convert the aggregation result into a List
		AggregationResults<RecommendCount> groupResults = mongoTemplate.aggregate(agg, Recommend.class,
				RecommendCount.class);
		List<RecommendCount> result = groupResults.getMappedResults();
		return result;
	}

	@Override
	public List<Recommend> getByBookId(String bookId) {
		return rs.findByBookId(bookId);
	}

	@Override
	public List<Recommend> getByEmailId(String emailId) {
		
		return rs.findByEmail(emailId);
	}
	
}
