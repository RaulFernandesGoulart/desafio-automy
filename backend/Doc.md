# Documentação — Desafio Técnico Integrações

**Nome:** Raul Fernandes Goulart  
**Telefone:** (31) 99509-4691  
**E-mail:** raulfernandes751@gmail.com  
**CPF:** 159.514.546-03

---

## 🧠 Objetivo

Esta aplicação integra com a API da Automy para consultar agendamentos de baterias de kart por e-mail.  
Ela possui um frontend minimalista e um backend em Node.js containerizado com Docker, que autentica, consulta e processa os dados em tempo real.

---

## ✅ Etapas Atendidas do Desafio

- [x] Autenticação via API com JWT  
- [x] Consulta ao endpoint com query SQL personalizada  
- [x] Filtro de dados por e-mail  
- [x] Backend em JavaScript com Express containerizado via Docker  
- [x] Frontend simples que:
  - Solicita e-mail do cliente
  - Exibe baterias futuras
  - Permite visualizar baterias passadas sob demanda  
- [x] Separação entre baterias passadas e futuras  
- [x] Documentação clara de uso e estrutura  
- [x] Execução oficial com Docker Compose

---

## 🚀 Como executar o projeto
Lembre se rodar o npm install para instalar as dependências.
### 🐳 Execução oficial com Docker (backend)

> A versão oficial da aplicação utiliza **Docker** para rodar o backend.

1. Certifique-se de ter o Docker instalado e rodando.  
2. Na raiz do projeto (onde está o `docker-compose.yaml`), execute:

```bash
docker compose up --build
✅ Servidor rodando em http://localhost:3001

# 🖥️ Como executar o Frontend

Este é o frontend da aplicação de consulta de baterias, feito em HTML, CSS e JavaScript puro.

---

## ✅ Passo a passo para rodar o frontend

1. Abra o projeto no **Visual Studio Code**.

2. Instale a extensão **Live Server**:
   - Vá até a aba **Extensions (Ctrl+Shift+X)**
   - Pesquise por: `Live Server`

3. Navegue até a pasta do frontend:

4. Abra o arquivo: index.js

5. Clique em Go Live ---> sera aberto o front no navegador de sua preferência.
