using Microsoft.AspNetCore.SignalR;
using SignalR_Server.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR_Server.Hubs
{
    public class ChatHub : Hub
    {
        public async Task EnviarMensagem(Mensagem mensagem)
        {
            await Clients.All.SendAsync("RecebendoMensagem", mensagem);
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);
        }
    }
}
