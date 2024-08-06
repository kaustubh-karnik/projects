import google.generativeai as genai

genai.configure(api_key="AIzaSyC5qRf_8wkKFgBjajHxFyWdzqbxS6l2PE4")
model = genai.GenerativeModel("gemini-pro")
# for m in genai.list_models():
#   if 'generateContent' in m.supported_generation_methods:
#     print(m.name)

# prompt = "show me how india was looking 100 years ago with some pictures"

# response = model.generate_content(prompt)

# print(response.text)