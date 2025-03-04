const massasAtomicas = {
    H: 1.008,
    O: 15.999,
    C: 12.011,
    N: 14.007,
    Cl: 35.453,
    Na: 22.990,
    K: 39.098,
    Ca: 40.078,
    Fe: 55.845
  };

  function calcularMassa() {
    const formula = document.getElementById('formula').value;
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match, massa = 0;

    while ((match = regex.exec(formula)) !== null) {
      const elemento = match[1];
      const quantidade = parseInt(match[2] || 1);
      if (massasAtomicas[elemento]) {
        massa += massasAtomicas[elemento] * quantidade;
      } else {
        alert(`Elemento desconhecido: ${elemento}`);
        return;
      }
    }
    document.getElementById('resultado').innerText = `Massa Molecular: ${massa.toFixed(3)} u`;
  }