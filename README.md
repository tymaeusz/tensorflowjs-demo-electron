
# tensorflowjs-demo-electron

Demonstração de detecção de poses de mãos usando TensorFlow para Electron.

## Visão Geral

Este projeto demonstra a detecção de poses de mãos utilizando TensorFlow.js, uma poderosa biblioteca de aprendizado de máquina para a web. Ele utiliza o modelo MediaPipe Hands para detectar e rastrear poses de mãos através da webcam em visões 2D e 3D.

## Funcionalidades

- Detecção de poses de mãos em tempo real usando a webcam.
- Renderização 2D dos pontos-chave das mãos e conexões.
- Visualização 3D de poses de mãos com scatter-gl.
- Rastreamento de FPS e contagem de quadros processados.

## Tecnologias Usadas

- [TensorFlow.js](https://www.tensorflow.org/js) - Biblioteca de aprendizado de máquina para a web.
- [MediaPipe Hands](https://github.com/google-ai-edge/mediapipe/blob/master/docs/solutions/hands.md) - Modelo de rastreamento de mãos do Google.
- [scatter-gl](https://github.com/PAIR-code/scatter-gl) - Visualização 3D para gráficos de dispersão.
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [Next.js](https://nextjs.org/) - Framework React para renderização no lado do servidor.
- [Electron](https://github.com/electron/electron) - Framework que permite escrever aplicativos de desktop multiplataforma usando JavaScript, HTML e CSS.

## Instalação

1. Clone o repositório:

   ```bash
   git clone git@github.com:tymaeusz/tensorflowjs-demo-electron.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd tensorflowjs-demo-electron
   ```

## Instruções de Execução

1. **Instale as depedências do projeto:**:

   ```bash
   npm install
   ```

2. **Execute o comando start-dev, ele é especial, invoca simultaneamente Next e Electron para fazer loucuras:**: 

   ```bash
   npm run start-dev
   ```

3. **Inicie a detecção de poses de mãos**: Conceda acesso à sua webcam quando solicitado. O aplicativo detectará e exibirá as poses das mãos em tempo real.

4. **Alternar visualização**: O aplicativo mostrará os pontos-chave das mãos e conexões em modos 2D e 3D.

## Contribuindo

Fique à vontade para fazer um fork do repositório, melhorar e criar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
