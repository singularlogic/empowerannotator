<%
int timeout = session.getMaxInactiveInterval();
response.setHeader("Refresh", timeout + "; URL = ../empower/signin.jsp?message=timeout");
%>