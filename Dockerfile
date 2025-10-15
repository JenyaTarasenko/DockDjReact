FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Запуск dev-сервера Django
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
# Команда запуска Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]

