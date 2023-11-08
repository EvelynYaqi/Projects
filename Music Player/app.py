from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='/home/lancelot/Projects/Music Player/templates')

# Serve static files (HTML, CSS, JS)
app._static_folder = '/home/lancelot/Projects/Music Player'

# Serve audio files
app.config['AUDIO_FOLDER'] = '/home/lancelot/Projects/Music Player/Music'

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app._static_folder, filename)

@app.route('/audio/<path:filename>')
def serve_audio(filename):
    return send_from_directory(app.config['AUDIO_FOLDER'], filename)

if __name__ == '__main__':
     app.run(host='0.0.0.0', port=5000, debug=True)

