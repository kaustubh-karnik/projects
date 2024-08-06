import google.generativeai as genai
import streamlit as st

genai.configure(api_key="[YOUR_API_KEY]")
model = genai.GenerativeModel("gemini-pro")

def get_email(src, dest, sub, tone, abt):
    prompt = "Write an email from {} to {}. Subject line is {}. The email is regarding {}. The tone of the Email should be {}".format(src, dest, sub, abt, tone)
    response = model.generate_content(prompt)
    return response.text

# print(get_email("student", "principal", "leave application fro 3 days", "formal", "i wont be attending college for the next 3 days"))

#prepare empty web page
st.set_page_config(
    page_title = "Online Email Genarator",
    page_icon = ":email:",
    layout = "centered",
    initial_sidebar_state = "collapsed"    
)

st.header("Write emails like a professional!")
st.write("Describe the type of email you want & AI will write it for you. ")

col1, col2 = st.columns(2)

with col1:
    src = st.text_input("Who is this email from ? (e.g. student)")
    sub = st.text_input("Subject of the email")
    
with col2:
    dest = st.text_input("Who is this email for ? (e.g. HOD)")
    tone = st.selectbox("Choose the tone of the email", ["Formal", "Informal", "Angry", "Funny"])

abt = st.text_area("What is this email about ?")

send_request = st.button("Generate Email")

if send_request:
    if src and sub and dest and tone and abt:
       st.write(get_email(src,dest,sub,tone,abt))
    else: 
        st.error("Please fill all the fields.")
