# MaterialYTD

## Como executar o projeto:

Guia basico para rodar o projeto localmente na sua maquina

### Configure o arquivo .env:

O projeto necessita de algumas variaveis de ambiente, para isso, use o arquivo env.example como base para saber todas as variaveis que são
necessarias.

#### Linux:
~~~ bash
# Vá para o diretorio raiz do MaterialYTD
$ cd {caminho-para-MaterialYtd}/MaterialYTD

# Escreva o conteudo do arquivo env.example
# no arquivo .env 
$ cat env.example >> .env

# Edite o arquivo .env com as configurações de sua preferencia
$ vim .env
~~~

#### Windows:

~~~ cmd
REM Vá para o diretorio raiz do MaterialYTD
> CD {caminho-para-MaterialYtd}/MaterialYTD~

REM Escreva o conteudo do arquivo env.example
REM no arquivo .env 
> COPY env.example .env

REM Edite o arquivo .env com as configurações de sua preferencia (notepad não vem por padrão no CMD)
> notepad .env

~~~
### Instalando as dependencias:
Nosso programa usa bibliotecas de terceiros,
sendo necessario instala-los para o programa
funcionar corretamente.

#### Todos SO (Sistema Operacionais):
~~~ bash
npm install
~~~

### Inicializar o projeto:
Por ultimo, apenas execute o programa
~~~
npm start
~~~