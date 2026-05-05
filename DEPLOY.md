# 🚀 Como subir o Visky no Vercel — Passo a Passo

> Sem precisar saber programar. Siga exatamente essa ordem.

---

## 📁 Estrutura de arquivos do projeto

Você precisa criar essa estrutura de pastas no seu computador:

```
visky-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── package.json
└── tsconfig.json
```

Todos esses arquivos estão na pasta que você baixou.

---

## ETAPA 1 — Instalar o Node.js

O Node.js é o programa que roda o Next.js no seu computador.

1. Acesse: https://nodejs.org
2. Clique no botão verde **"LTS"** para baixar
3. Instale normalmente (next, next, finish)
4. Para confirmar que funcionou: abra o **Prompt de Comando** (Windows) e digite:
   ```
   node -v
   ```
   Deve aparecer algo como `v20.x.x`

---

## ETAPA 2 — Criar conta no GitHub

O GitHub é onde o código fica armazenado. O Vercel puxa o código de lá.

1. Acesse: https://github.com
2. Clique em **Sign up**
3. Use o email **visky.app@gmail.com**
4. Crie usuário: `viskyapp` (ou similar)

---

## ETAPA 3 — Instalar o Git

O Git é o programa que envia os arquivos para o GitHub.

1. Acesse: https://git-scm.com/download/win
2. Baixe e instale (pode clicar next em tudo)

---

## ETAPA 4 — Criar repositório no GitHub

1. Acesse https://github.com e entre na sua conta
2. Clique no **+** no canto superior direito → **New repository**
3. Nome do repositório: `visky-landing`
4. Deixa como **Public**
5. Clique em **Create repository**
6. Copie a URL que aparece (ex: `https://github.com/viskyapp/visky-landing.git`)

---

## ETAPA 5 — Subir os arquivos para o GitHub

1. Coloque a pasta `visky-landing` em algum lugar fácil no seu computador (ex: `C:\visky-landing`)
2. Abra o **Prompt de Comando** e navegue até a pasta:
   ```
   cd C:\visky-landing
   ```
3. Execute os comandos abaixo **um por vez**:
   ```
   git init
   git add .
   git commit -m "primeiro commit"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO
   git push -u origin main
   ```
   > Substitua `URL_DO_SEU_REPOSITORIO` pela URL que você copiou no passo anterior.

4. Se pedir login, use o email e senha do GitHub.

---

## ETAPA 6 — Criar conta no Vercel e fazer o deploy

1. Acesse: https://vercel.com
2. Clique em **Sign up** → **Continue with GitHub**
3. Autorize o Vercel a acessar seu GitHub
4. Clique em **Add New Project**
5. Selecione o repositório `visky-landing`
6. Não muda nada nas configurações — clique em **Deploy**
7. Aguarda ~2 minutos

✅ Pronto! O Vercel vai te dar um link assim:
**`https://visky-landing.vercel.app`**

Esse é o link da sua landing page no ar!

---

## ETAPA 7 — Colocar o link na bio das redes

Agora que a landing page está no ar, atualize a bio do Instagram, X e Threads com o link.

---

## ⚠️ Se travar em algum passo

Me manda uma print do erro que resolvo contigo.

---

## 🔜 Próximo passo depois disso

Integrar a captura de email com o **MailerLite** (gratuito) para que cada email cadastrado caia automaticamente em uma lista. Aí você consegue ver quantas pessoas entraram na lista de espera.
