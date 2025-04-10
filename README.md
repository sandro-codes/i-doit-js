# i-doit-js

**i-doit-js** is a modern, easy-to-use, yet feature-rich JavaScript client for interacting with the [i-doit CMDB](https://www.i-doit.com/) via its JSON-RPC API.

> **Note:** This project is not affiliated with or officially supported by synetics GmbH, the creators of i-doit.

---

## 📦 About i-doit

[i-doit](https://www.i-doit.com/) is a web-based software application for **IT documentation** and **CMDB (Configuration Management Database)** management.  
It enables you to record, manage, and automate your IT infrastructure using a powerful and extensive API.

---

## ✨ Features

- JSON-RPC interface wrapper for i-doit
- Easy authentication using API keys
- Convenient methods for object handling (create, read, update, delete)
- Clean and minimalistic structure for extensibility
- Fully asynchronous (Promise-based)

---

## 🚀 Installation

```bash
npm install git+https://github.com/Hildebrand-S/i-doit-js.git
```

---

## 📚 API Methods

This library allows you to call any method supported by the i-doit JSON-RPC API.  
You can find the complete API documentation here:  
[https://kb.i-doit.com/de/i-doit-add-ons/api/](https://kb.i-doit.com/de/i-doit-add-ons/api/)

---

## 🛠 Configuration Options

| Option    | Required | Description                              |
|-----------|----------|------------------------------------------|
| `url`     | ✅        | Base URL to your i-doit `jsonrpc.php` endpoint |
| `apiKey`  | ✅        | API key/token for authentication         |
| `language`| ❌        | Language code (e.g., "en", "de")         |

---

## 📌 Example Use Cases

- Automate CMDB object creation
- Update infrastructure components on deployment
- Fetch asset details for internal dashboards
- Integrate with other DevOps tools

---

## 📄 License

[MIT License](./LICENSE)

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to submit issues, suggest improvements, or open a pull request.

---

## 🙏 Disclaimer

This is an **independent, community-driven project**.  
It is **not affiliated with synetics GmbH**. No commercial support is provided.
