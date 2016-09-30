package com.test.service;

import java.util.List;

public interface CommentService {
	
	void add(String content);

    /**
     * 根据id删除一个评论
     * @param id
     */
    void deleteById(int id);

    /**
     * 获取评论总量
     */
    Integer getAllComments();

    /**
     * 修改评论
     */
    void updateComment(int id,String Ncontent);
    
    /**
     * 删除所有评论
     */
    void deleteAllComments();

	List getListComments();

	List getListCommentsDesc();
}
