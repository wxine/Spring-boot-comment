package com.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.service.CommentService;

@SpringBootApplication
@Controller
public class CommentApplication {
	@Autowired
	private CommentService CommentService;
	
	@RequestMapping("/")
    public String greeting(Model model) {
		model.addAttribute("posts",CommentService.getListCommentsDesc());
        return "hello";
    }
	
	@RequestMapping(value = "/add", method = RequestMethod.POST,produces="text/html;charset=UTF-8")
	public String add(@RequestParam(value="content", required=false) String content){
		CommentService.add(content);
		return "redirect:/";
	}
	
	
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	@ResponseBody
	public String update(@RequestParam("id") String id,@RequestParam("Ncontent") String Ncontent){
		CommentService.updateComment(Integer.parseInt(id), Ncontent);
		return id;
	}
	
	
	@RequestMapping("/delete/{id}")
	public String delete(@PathVariable("id") String id){
		CommentService.deleteById(Integer.parseInt(id));
		return "redirect:/";
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CommentApplication.class, args);
	}
}
