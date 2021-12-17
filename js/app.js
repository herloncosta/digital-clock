const relogio = document.querySelector('h1')

const atualizarRelogio = () => {
  let now = new Date()
  
  let time = {
    second: now.getSeconds(),
    minute: now.getMinutes(),
    hour: now.getHours()
  }

  let {second, minute, hour} = time

  relogio.innerHTML = `${formatarTempo(hour)}:${formatarTempo(minute)}:${formatarTempo(second)}`
}

const formatarTempo = tempo => tempo < 10 ? `0${tempo}` : `${tempo}`
setInterval(atualizarRelogio, 1000)
atualizarRelogio()
