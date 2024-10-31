const PUBLIC_VAPID_KEY = 'BH9y-z_sOdUmw5YJxz38pZXrXWDmQ9yZGyFw0WTbIbXk7oJlQDBv5Nkoknz4bVphFm6ti6GHLcBASGhc3PPbq6g';

const subscription = async () => {
    fetch('/subscription', {
    method: 'POST',
    body:{},
    headers: {
        "Content-Type":"application/json"
    }
    });
}

subscription();