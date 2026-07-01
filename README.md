# 🔓 API Insegura Node

Uma API REST desenvolvida em **Node.js** com vulnerabilidades intencionais para demonstrar falhas comuns de segurança em aplicações web, seus impactos e as formas recomendadas de mitigação.

> **⚠️ Aviso:** Este projeto possui vulnerabilidades implementadas propositalmente para fins educacionais. **Não utilize este código em ambientes de produção.**

---

## 📖 Sobre o projeto

A **API Insegura Node** foi criada como um projeto de estudos voltado para **Application Security (AppSec)** e **Desenvolvimento Seguro**.

O objetivo é apresentar cenários reais de vulnerabilidades encontradas em aplicações Node.js, demonstrando:

* Como a vulnerabilidade ocorre;
* Qual o impacto na aplicação;
* Como ela pode ser explorada;
* Quais práticas e técnicas devem ser utilizadas para corrigi-la.

Além de servir como laboratório para estudos, este projeto faz parte do meu portfólio, demonstrando minha evolução na área de Segurança da Informação e meu interesse em desenvolver aplicações mais seguras.

---

## 🎯 Objetivos

* Estudar vulnerabilidades comuns em APIs REST.
* Demonstrar boas práticas de desenvolvimento seguro.
* Entender técnicas de mitigação utilizadas no mercado.
* Servir como ambiente de testes para estudos de AppSec.

---

## 🚨 Vulnerabilidades abordadas

Atualmente o projeto contém exemplos de vulnerabilidades intencionais. Novos cenários serão adicionados continuamente.

Exemplos:

* Validação inadequada de entrada
* Tratamento incorreto de erros
* Exposição de informações sensíveis

> Conforme o projeto evoluir, novas vulnerabilidades e suas respectivas correções serão adicionadas.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* SQLite
* Swagger (OpenAPI)

---

## 🚀 Como executar

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-insegura-node.git
```

### Acesse a pasta

```bash
cd api-insegura-node
```

### Instale as dependências

```bash
npm install
```

### Execute a aplicação

```bash
npm start
```

ou

```bash
npm run dev
```

---

## 📚 Documentação

A documentação da API é disponibilizada através do **Swagger**.

Após iniciar a aplicação, acesse:

```text
http://localhost:3000/docs
```

---

## 🗺️ Roadmap

* [x] Estrutura inicial da API
* [x] Cadastro de usuários
* [x] Documentação com Swagger
* [ ] SQL Injection
* [ ] Broken Authentication
* [ ] Broken Access Control
* [ ] Sensitive Data Exposure
* [ ] Security Misconfiguration
* [ ] Insecure Direct Object Reference (IDOR)
* [ ] JWT inseguro
* [ ] Rate Limiting
* [ ] Validação segura de entrada
* [ ] Sanitização de dados
* [ ] Correções e versões seguras de cada vulnerabilidade

---

## 🎓 Público-alvo

Este projeto é destinado a:

* Desenvolvedores
* Estudantes de Segurança da Informação
* Profissionais de Application Security
* Pessoas interessadas em Desenvolvimento Seguro

---

## 🤝 Contribuições

Sugestões, melhorias e novas ideias de vulnerabilidades são bem-vindas. Fique à vontade para abrir uma *Issue* ou enviar um *Pull Request*.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Zucchetti** como projeto de estudos em **Application Security** e **Secure Software Development**.

---

## ⚖️ Licença

Este projeto é destinado exclusivamente para fins educacionais.
