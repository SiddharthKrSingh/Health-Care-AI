from dotenv import load_dotenv
load_dotenv()

import os
import google.generativeai as genai
from flask import Flask, render_template, request
from googletrans import Translator

app = Flask(__name__)

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        question = request.form['input']
        response = get_gemini_response(question)
        response_lines = response.split('\n')
        chat_history = [(f"You: {question}", response_lines)]
        return render_template('index.html',
                               title='HEALTHCARE-AI-ASSISTANT',
                               input_placeholder='Enter your question',
                               submit_button_text='SUBMIT',
                               response=response_lines,
                               response_title='The Response is',
                               chat_history_title='The Chat History is',
                               chat_history=chat_history)
    return render_template('index.html',
                           title='HEALTHCARE-AI-ASSISTANT',
                           input_placeholder='Enter your question',
                           submit_button_text='SUBMIT',
                           response_title='The Response is',
                           chat_history_title='The Chat History is',
                           )

def get_gemini_response(question):
    response = chat.send_message(question, stream=True)
    return '\n'.join([chunk.text for chunk in response])

def translate_to_hindi(text):
    translator = Translator()
    translation = translator.translate(text, dest='hindi')
    return translation.text


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8083,debug=True)