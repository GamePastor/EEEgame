from PodSixNet.Server import Server
from PodSixNet.Channel import Channel

class ClientChannel(Channel):
    def Network(self, data):
        print('Dados recebidos do cliente:', data)

class MyServer(Server):
    channelClass = ClientChannel

    def __init__(self, *args, **kwargs):
        Server.__init__(self, *args, **kwargs)
        self.games = []

    def Connected(self, channel, addr):
        print('Novo jogador conectado:', channel)
        # Mensagem de boas-vindas para o cliente
        channel.Send({'action': 'message', 'message': 'Bem-vindo ao servidor!'})

    def handle_request(self, data, channel):
        print('Dados recebidos do cliente:', data)
        # Aqui você pode adicionar lógica de jogo
        # por exemplo, encaminhar os dados para todos os outros jogadores
        # ou atualizar o estado do jogo e enviar de volta para os clientes

if __name__ == "__main__":
    myserver = MyServer(localaddr=('127.0.0.1', 31425))
    while True:
        myserver.Pump()
