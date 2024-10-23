## 📝 Aula 09: Comprima JavaScript com Grunt

Nesta aula, vamos aprender a comprimir arquivos JavaScript usando o Grunt. Isso ajuda a reduzir o tamanho dos arquivos e a melhorar o tempo de carregamento do site. Também veremos como configurar o Vercel para fazer o deploy do projeto.

### Instalação do Plugin

Primeiro, instalamos o plugin `grunt-contrib-uglify` para realizar a compressão do JavaScript:

```bash
npm install --save-dev grunt-contrib-uglify
```

### Configuração do Plugin

Em seguida, configuramos o plugin no `Gruntfile.js`. Adicionamos a tarefa `uglify` para comprimir nosso arquivo JavaScript.

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./dev/styles/main.css": "src/styles/main.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less"
        }
      }
    },
    uglify: {
      target: {
        files: {
          "dist/scripts/main.min.js": "src/scripts/main.js"
        }
      }
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.css"
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "dev/"
          }
        ]
      },
      dist: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.min.css"
            },
            {
              match: "ENDERECO_DO_JS",
              replacement: "./scripts/main.min.js"
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["prebuild/index.html"],
            dest: "dist/"
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "prebuild/index.html": "src/index.html"
        }
      }
    },
    clean: ["prebuild"],
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"]
      },
      html: {
        files: ["src/index.html"],
        tasks: ["replace:dev"]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-less")
  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-htmlmin")
  grunt.loadNpmTasks("grunt-replace")
  grunt.loadNpmTasks("grunt-contrib-clean")

  grunt.registerTask("default", ["less:development", "replace:dev"])
  grunt.registerTask("build", ["less:production", "uglify", "htmlmin", "replace:dist", "clean"])
}
```

### Deploy no Vercel

Para fazer o deploy do projeto no Vercel, siga estes passos:

1. **Instale a CLI do Vercel**: Se ainda não tiver instalado, instale a CLI do Vercel.

   ```bash
   npm install -g vercel
   ```

2. **Inicie o Projeto no Vercel**: Na raiz do seu projeto, execute:

   ```bash
   vercel
   ```

3. **Configure o Vercel**: Siga as instruções para configurar o projeto. Certifique-se de definir a pasta de saída correta (como `dist`).

4. **Deploy**: Após a configuração inicial, você pode fazer deploys subsequentes com:
   ```bash
   vercel --prod
   ```

### Exemplo de Arquivo JavaScript

Vamos usar o arquivo `main.js` como exemplo. Coloque este arquivo na pasta `src/scripts`:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-sorteador").addEventListener("submit", function (event) {
    event.preventDefault()
    let numeroMaximo = document.getElementById("numero-maximo").value
    numeroMaximo = parseInt(numeroMaximo)

    let numeroAleatorio = Math.random() * numeroMaximo
    numeroAleatorio = Math.floor(numeroAleatorio + 1)

    document.getElementById("resultado-valor").innerText = numeroAleatorio
    document.querySelector(".resultado").style.display = "block"
  })
})
```

### Resumo

Nesta aula, aprendemos a comprimir arquivos JavaScript usando o Grunt com o plugin `grunt-contrib-uglify`. Configuramos o Grunt para minificar os arquivos de produção e também para substituir os caminhos dos arquivos CSS e JavaScript no HTML. Por fim, vimos como configurar o Vercel para fazer o deploy do projeto.

### Arquivo `index.html` com Variáveis de Substituição

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sorteador</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="@ENDERECO_DO_CSS" />
  </head>
  <body>
    <main>
      <h1>Sorteador</h1>
      <form id="form-sorteador" action="">
        <div>
          <label for="numero-maximo">Número máximo</label>
          <input type="number" id="numero-maximo" required />
        </div>
        <button type="submit">Sortear número</button>
      </form>
      <div class="resultado" style="display: none;">
        <p>Resultado: <span id="resultado-valor"></span></p>
      </div>
    </main>
    <script src="@ENDERECO_DO_JS"></script>
  </body>
</html>
```
