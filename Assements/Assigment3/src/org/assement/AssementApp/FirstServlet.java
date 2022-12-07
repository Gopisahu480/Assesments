package org.assement.AssementApp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
@WebServlet("/fs")
public class FirstServlet extends GenericServlet{

	@Override
	public void service(ServletRequest req, ServletResponse res)
			throws ServletException, IOException 
	{
		//FETCH DATA
		String st=req.getParameter("nm");
		String l=req.getParameter("pl");
		char ch1=l.charAt(0);
		String rs="";
		for(int i=0;i<st.length();i++)
		{
			char ch=st.charAt(i);
			if(ch==ch1)
			{
				rs=st.substring(i+1);
				break;
			}
		}
		if(rs.length()==0)
			rs="The letter does not exist in the sentence";
		//PRESENTATION LOGIC
		PrintWriter out=res.getWriter();
		out.println("<html><body bgcolor='yellow'>"
				+ ""+"<h1>"+rs+"<h1>"
						+ ""+"</body></html>");
		out.close();
		
	}
	
	

}
