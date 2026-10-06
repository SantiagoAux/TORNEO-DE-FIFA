Quiero desarrollar una aplicación web interactiva para gestionar y simular un torneo de FIFA llamado:

# 🎮⚽ TORNEO DE FIFA LA GANGA

La aplicación debe sentirse como una mezcla entre un videojuego de fútbol moderno, un torneo competitivo de FIFA/EA FC y una interfaz de esports. No quiero una aplicación administrativa aburrida; quiero que sea VISUAL, DIVERTIDA, DINÁMICA, INTERACTIVA y con muchas animaciones.

## 1. OBJETIVO PRINCIPAL

La aplicación permitirá organizar un torneo de FIFA de manera sencilla:

1. Registrar o cargar los participantes.
2. Registrar o cargar los equipos disponibles.
3. Realizar un sorteo aleatorio de equipos para cada participante.
4. Generar aleatoriamente los enfrentamientos.
5. Ejecutar un sistema de eliminación directa.
6. Registrar los resultados de cada partido.
7. Determinar automáticamente quién avanza y quién queda eliminado.
8. Mostrar el bracket/cuadro del torneo.
9. Llegar hasta la gran final.
10. Mostrar al campeón del torneo con una celebración especial.

La aplicación debe funcionar principalmente en el navegador y tener una experiencia visual similar a un videojuego de fútbol.

---

# 2. DISEÑO GENERAL

El diseño debe combinar:

* ⚽ Fútbol
* 🎮 Videojuegos
* 🏆 Esports
* 🔥 Competencia
* 🌑 Interfaz moderna/dark
* ✨ Animaciones
* 💥 Efectos visuales

Usar una estética de videojuego deportivo moderno.

### Estilo visual

Preferiblemente:

* Fondo oscuro.
* Negro/gris oscuro como base.
* Verde relacionado con cancha de fútbol.
* Blanco para textos.
* Colores llamativos para acciones importantes.
* Detalles tipo neón.
* Tarjetas con apariencia de videojuego.
* Botones grandes y llamativos.
* Gradientes.
* Sombras.
* Bordes iluminados.
* Animaciones suaves.
* Microinteracciones.

No quiero que parezca una página web corporativa.

Debe parecer una aplicación de torneo de FIFA/EA FC.

---

# 3. TÍTULO PRINCIPAL

En la pantalla principal debe aparecer de forma muy llamativa:

## TORNEO DE FIFA LA GANGA

Debajo puede aparecer un subtítulo:

### "QUE GANE EL MEJOR 🎮⚽"

El título debe tener una animación de entrada.

Se puede agregar:

* balón de fútbol animado
* partículas
* luces
* efectos de estadio
* animaciones relacionadas con fútbol

---

# 4. PANTALLA PRINCIPAL / DASHBOARD

Crear un dashboard principal con diferentes secciones:

### 🏆 TORNEO DE FIFA LA GANGA

Mostrar:

* Número de participantes.
* Número de equipos.
* Partidos jugados.
* Partidos pendientes.
* Participantes restantes.
* Ronda actual.
* Próximo enfrentamiento.

Ejemplo:

PARTICIPANTES: 16
EQUIPOS: 16
PARTIDOS JUGADOS: 3
JUGADORES RESTANTES: 13
RONDA: OCTAVOS DE FINAL

---

# 5. REGISTRO DE PARTICIPANTES

Crear una sección:

## 👥 PARTICIPANTES

Debe permitir agregar participantes.

Cada participante debe tener:

* Nombre
* Avatar opcional
* Número/ID
* Estado: activo/eliminado/campeón

Ejemplo:

1. Santiago
2. Andrés
3. Juan
4. Sebastián
5. Mateo
6. Carlos
7. David
8. Felipe

Permitir:

* Agregar participante.
* Eliminar participante.
* Editar participante.
* Limpiar lista.
* Importar participantes.
* Generar participantes de prueba.

También debe existir la opción de pegar varios nombres de una sola vez.

Ejemplo:

Santiago
Andrés
Juan
Sebastián
Mateo
Carlos
David
Felipe

La aplicación debe convertir automáticamente cada línea en un participante.

---

# 6. LISTA DE EQUIPOS

Crear otra sección:

## ⚽ EQUIPOS

Debe permitir ingresar los equipos disponibles.

Cada equipo puede tener:

* Nombre
* Logo/escudo
* País
* Color principal
* Rating opcional

Ejemplo:

* Real Madrid
* Barcelona
* Manchester City
* Liverpool
* Bayern Munich
* PSG
* Arsenal
* Inter
* Milan
* Juventus
* Chelsea
* Borussia Dortmund

La aplicación debe permitir agregar, editar y eliminar equipos.

También debe poder cargar equipos de prueba.

---

# 7. SORTEO DE EQUIPOS

Esta es una de las partes MÁS IMPORTANTES.

Debe existir un botón grande:

## 🎲 REALIZAR SORTEO

Al presionarlo, no debe simplemente mostrar el resultado inmediatamente.

Quiero una experiencia de sorteo como un videojuego.

### Animación:

1. Aparece una pantalla especial.
2. Se muestran los participantes.
3. Se muestran los equipos.
4. Comienza una animación de selección aleatoria.
5. Los nombres y equipos empiezan a cambiar rápidamente.
6. Se reproduce un efecto visual.
7. Finalmente se detiene.
8. Se revela la combinación.

Ejemplo:

🎮 SANTIAGO

VS

⚽ REAL MADRID

Después:

🔥 ¡SANTIAGO JUGARÁ CON REAL MADRID!

Continuar hasta asignar todos los equipos.

Cada participante debe recibir un equipo de manera aleatoria.

No permitir que dos participantes reciban el mismo equipo, salvo que se configure explícitamente que los equipos pueden repetirse.

---

# 8. TABLA DE PARTICIPANTES + EQUIPOS

Después del sorteo mostrar una tabla visual:

| PARTICIPANTE | EQUIPO      | ESTADO    |
| ------------ | ----------- | --------- |
| Santiago     | Real Madrid | 🟢 Activo |
| Andrés       | Barcelona   | 🟢 Activo |
| Juan         | Liverpool   | 🟢 Activo |
| Mateo        | PSG         | 🟢 Activo |

Pero en lugar de una tabla aburrida, utilizar tarjetas estilo videojuego.

Cada participante debería tener una "player card" con:

* Nombre
* Equipo
* Escudo
* Estado
* Número de jugador

---

# 9. GENERACIÓN DE ENFRENTAMIENTOS

Después del sorteo debe aparecer un botón:

## 🔥 GENERAR ENFRENTAMIENTOS

Los enfrentamientos deben generarse de manera aleatoria.

Ejemplo:

### OCTAVOS DE FINAL

PARTIDO 1

🎮 Santiago
⚽ Real Madrid

VS

🎮 Andrés
⚽ Barcelona

---

PARTIDO 2

🎮 Juan
⚽ Liverpool

VS

🎮 Mateo
⚽ PSG

Y así sucesivamente.

Los enfrentamientos deben ser aleatorios.

---

# 10. SISTEMA DE ELIMINACIÓN DIRECTA

El torneo debe funcionar como una competición de eliminación directa.

Regla:

### EL QUE PIERDE, QUEDA ELIMINADO.

El ganador avanza automáticamente a la siguiente ronda.

Ejemplo:

16 participantes:

OCTAVOS → 16
CUARTOS → 8
SEMIFINAL → 4
FINAL → 2
CAMPEÓN → 1

---

# 11. NÚMERO IMPAR DE PARTICIPANTES

La aplicación debe manejar automáticamente casos en los que el número de participantes no permita construir perfectamente una ronda de eliminación.

Ejemplo:

10 participantes.

No se debe romper el torneo.

La aplicación debe calcular automáticamente cómo equilibrar el bracket.

Si es necesario:

* seleccionar participantes que pasan directamente,
* realizar una ronda preliminar,
* o utilizar el criterio de "mejor perdedor".

---

# 12. REGLA DEL "MEJOR PERDEDOR"

Implementar un sistema especial para cuando sea necesario cuadrar el torneo.

Si se requiere un participante adicional para completar la siguiente ronda:

### MEJOR PERDEDOR

La aplicación debe permitir seleccionar automáticamente al mejor perdedor basándose en criterios configurables.

Por defecto:

1. Mayor cantidad de goles anotados.
2. Menor diferencia de goles recibidos.
3. Mayor diferencia de goles.
4. Si siguen empatados, selección aleatoria.

Ejemplo:

Jugador A perdió 3-2 → 2 goles anotados.

Jugador B perdió 1-0 → 0 goles anotados.

Jugador C perdió 4-3 → 3 goles anotados.

El mejor perdedor sería:

🔥 Jugador C

Mostrar una animación:

## 😱 ¡HAY UNA SEGUNDA OPORTUNIDAD!

### EL MEJOR PERDEDOR REGRESA AL TORNEO

Esto debe ser una experiencia divertida y emocionante.

---

# 13. REGISTRO DE RESULTADOS

Cada partido debe tener una pantalla donde se pueda introducir:

* Goles del jugador 1
* Goles del jugador 2

Ejemplo:

### 🔥 PARTIDO

SANTIAGO
🇪🇸 REAL MADRID

[ 3 ]

VS

[ 2 ]

ANDRÉS
🇪🇸 BARCELONA

Botón:

## ⚽ CONFIRMAR RESULTADO

Después de confirmar:

🎉 ¡SANTIAGO AVANZA!

Andrés queda eliminado.

Actualizar automáticamente:

* bracket
* estadísticas
* participantes
* próxima ronda

---

# 14. ANIMACIÓN DE GOL

Cuando se registre un resultado, especialmente cuando un jugador marque goles, quiero una pequeña animación.

Ejemplo:

⚽⚽⚽

## GOOOOOOOOOOL

con:

* vibración
* partículas
* balón
* sonido opcional
* animación de marcador

El sonido debe poder activarse/desactivarse desde configuración.

---

# 15. BRACKET DEL TORNEO

Crear una pantalla:

# 🏆 CUADRO DEL TORNEO

Mostrar visualmente:

OCTAVOS
↓
CUARTOS
↓
SEMIFINAL
↓
FINAL
↓
🏆 CAMPEÓN

El bracket debe actualizarse automáticamente.

Cada partido debe mostrar:

PARTICIPANTE
EQUIPO
MARCADOR
ESTADO

Ejemplo:

┌────────────────────┐
│ SANTIAGO           │
│ REAL MADRID    3   │
├────────────────────┤
│ ANDRÉS             │
│ BARCELONA      1   │
└────────────────────┘

El ganador debe resaltarse visualmente.

---

# 16. PANTALLA DE CADA PARTIDO

Crear una experiencia especial para cada partido.

Debe parecer una pantalla de selección/partido de videojuego.

Mostrar:

### 🔥 MATCH

Jugador 1

[ESCUDO]

REAL MADRID

SANTIAGO

VS

Jugador 2

[ESCUDO]

BARCELONA

ANDRÉS

Debajo:

[ 0 ] ⚽ [ 0 ]

Botón:

### REGISTRAR RESULTADO

---

# 17. EFECTOS Y ANIMACIONES

Quiero MUCHAS interacciones.

Agregar, cuando tenga sentido:

* Fade in
* Slide
* Zoom
* Shake
* Glow
* Partículas
* Confeti
* Animación de balón
* Animación de sorteo
* Transiciones entre rondas
* Efectos al ganar
* Efectos al eliminar
* Efectos al coronar campeón

Pero evitar animaciones excesivas que hagan lenta la aplicación.

Las animaciones deben sentirse como un videojuego.

---

# 18. ELIMINACIÓN DE UN PARTICIPANTE

Cuando alguien pierda:

Mostrar:

## 💀 ELIMINADO

Nombre del participante.

Ejemplo:

### ANDRÉS

BARCELONA

❌ HA SIDO ELIMINADO

Después mostrar:

🔥 ¡SANTIAGO AVANZA A CUARTOS DE FINAL!

---

# 19. AVANCE DE RONDA

Cuando termine una ronda:

Mostrar una pantalla especial:

## 🔥 ¡CUARTOS DE FINAL!

"Los mejores siguen vivos."

Después mostrar los nuevos enfrentamientos.

Hacer una pequeña animación de transición.

---

# 20. SEMIFINALES

Las semifinales deben sentirse más importantes.

Mostrar:

# 🏆 SEMIFINALES

Con un diseño más espectacular.

Añadir:

🔥 VS 🔥

Y mostrar quiénes quedan.

---

# 21. GRAN FINAL

La final debe tener una pantalla completamente especial.

# 🏆 GRAN FINAL

## TORNEO DE FIFA LA GANGA

Mostrar los dos finalistas de forma enorme.

Ejemplo:

SANTIAGO
⚽ REAL MADRID

VS

ANDRÉS
⚽ BARCELONA

Agregar una cuenta regresiva opcional:

3
2
1

## ¡QUE COMIENCE LA FINAL!

---

# 22. CAMPEÓN

Cuando se registre el resultado de la final:

Mostrar una pantalla espectacular:

# 🏆 CAMPEÓN

## SANTIAGO

### REAL MADRID

### 🏆 ¡CAMPEÓN DEL TORNEO DE FIFA LA GANGA! 🏆

Agregar:

* Confeti
* Trofeo animado
* Luces
* Partículas
* Animación de celebración
* Sonido opcional
* Estadísticas finales

Ejemplo:

🏆 CAMPEÓN
⚽ 5 PARTIDOS
🔥 12 GOLES
🥅 4 GOLES RECIBIDOS
📈 +8 DIFERENCIA DE GOL

---

# 23. ESTADÍSTICAS

Crear una sección:

# 📊 ESTADÍSTICAS

Mostrar:

* Máximo goleador
* Más victorias
* Más derrotas
* Mejor diferencia de goles
* Equipo campeón
* Participante campeón
* Número de partidos
* Promedio de goles
* Mejor perdedor
* Partido con más goles

Ejemplo:

### 👑 MÁXIMO GOLEADOR

Santiago — 14 goles

### 🧤 MEJOR DEFENSA

Andrés — 2 goles recibidos

### 🔥 PARTIDO MÁS GOLEADOR

Santiago 7 - 5 Carlos

---

# 24. HISTORIAL DE PARTIDOS

Crear una sección:

## 📜 HISTORIAL

Mostrar todos los partidos jugados.

Ejemplo:

RONDA | JUGADOR | RESULTADO | GANADOR

Octavos | Santiago vs Andrés | 3-1 | Santiago

Cuartos | Santiago vs Juan | 2-0 | Santiago

Semifinal | Santiago vs Carlos | 4-3 | Santiago

---

# 25. MODO PRESENTACIÓN

Agregar un botón:

## 🎥 MODO ESPECTADOR

Que permita mostrar el torneo en pantalla completa, pensado para proyectarlo en un televisor.

En este modo:

* Ocultar controles administrativos.
* Mostrar bracket.
* Mostrar partidos.
* Mostrar resultados.
* Mostrar animaciones.
* Mostrar próxima partida.

Debe ser ideal para una reunión con amigos.

---

# 26. CONFIGURACIÓN

Crear una sección de configuración donde pueda modificar:

* Nombre del torneo.
* Número de participantes.
* Lista de participantes.
* Lista de equipos.
* Permitir equipos repetidos.
* Activar/desactivar sonido.
* Activar/desactivar animaciones.
* Criterio de mejor perdedor.
* Duración de animaciones.
* Reiniciar torneo.

Agregar botón:

## ⚠️ REINICIAR TORNEO

Pedir confirmación antes de borrar los datos.

---

# 27. GUARDADO DE DATOS

La aplicación debe guardar el estado del torneo para que si se recarga la página no se pierda todo.

Para una primera versión puede utilizar:

* localStorage

La arquitectura debe permitir posteriormente conectar:

* Firebase
* Supabase
* MongoDB
* PostgreSQL

No quiero perder el progreso si accidentalmente se actualiza el navegador.

---

# 28. DISEÑO RESPONSIVE

La aplicación debe funcionar perfectamente en:

* PC
* Laptop
* Tablet
* Celular

En PC debe aprovechar el espacio para mostrar el bracket.

En celular debe convertirse en tarjetas verticales.

---

# 29. CARPETA DE DISEÑO / RECURSOS

IMPORTANTE:

Voy a proporcionar una carpeta que contiene recursos de diseño, imágenes y posiblemente código existente.

Debes:

1. Analizar primero la carpeta.
2. Identificar la estructura existente.
3. Identificar tecnologías utilizadas.
4. Identificar imágenes.
5. Identificar componentes reutilizables.
6. Identificar estilos existentes.
7. Identificar logos y recursos gráficos.
8. Mantener lo que sea útil.
9. No eliminar código existente sin una razón clara.
10. Adaptar la aplicación al diseño y arquitectura existentes.

Si la carpeta contiene un proyecto ya iniciado, trabajar SOBRE ese proyecto en lugar de crear otro proyecto completamente separado.

Respetar:

* estructura de carpetas
* framework
* componentes
* sistema de estilos
* assets
* configuración existente

Si existe una identidad visual en la carpeta, utilizarla como base.

---

# 30. TECNOLOGÍA

Antes de comenzar, analizar qué tecnología utiliza la carpeta proporcionada.

Si no existe una tecnología definida, utilizar una arquitectura moderna basada preferiblemente en:

* React
* Vite
* TypeScript
* Tailwind CSS

Utilizar componentes reutilizables.

Mantener el código limpio y organizado.

---

# 31. ARQUITECTURA

Separar correctamente:

### COMPONENTES

* Header
* Dashboard
* ParticipantList
* TeamList
* TeamDraw
* MatchGenerator
* TournamentBracket
* MatchCard
* MatchResult
* RoundTransition
* Statistics
* ChampionScreen
* Settings
* SpectatorMode

### LÓGICA

Separar la lógica del torneo de la interfaz.

Crear funciones para:

* sortear equipos
* generar enfrentamientos
* crear rondas
* registrar resultados
* determinar ganador
* determinar eliminado
* calcular mejor perdedor
* avanzar de ronda
* calcular estadísticas
* determinar campeón

---

# 32. REGLAS IMPORTANTES

La lógica debe evitar errores.

No permitir:

* registrar resultados de partidos inexistentes
* registrar resultados de un participante eliminado
* asignar el mismo equipo dos veces cuando esté deshabilitada esa opción
* avanzar a un jugador que perdió
* modificar resultados accidentalmente sin confirmación
* comenzar el torneo sin suficientes participantes/equipos

Validar todos los datos.

---

# 33. EXPERIENCIA DE USUARIO

La aplicación debe ser extremadamente intuitiva.

El flujo principal debe ser:

### PASO 1

👥 PARTICIPANTES

↓

### PASO 2

⚽ EQUIPOS

↓

### PASO 3

🎲 SORTEAR EQUIPOS

↓

### PASO 4

🔥 GENERAR ENFRENTAMIENTOS

↓

### PASO 5

🎮 JUGAR PARTIDOS

↓

### PASO 6

📊 REGISTRAR RESULTADOS

↓

### PASO 7

🏆 AVANZAR DE RONDA

↓

### PASO 8

👑 CORONAR CAMPEÓN

---

# 34. DETALLES DIVERTIDOS

Quiero que agregues elementos que hagan que la aplicación se sienta viva.

Por ejemplo:

Al comenzar:

"🔥 ¿ESTÁN LISTOS?"

Durante el sorteo:

"🎲 EL DESTINO HA HABLADO..."

Antes de un partido:

"⚔️ SOLO UNO PUEDE AVANZAR"

Después de una victoria:

"🔥 ¡QUÉ PARTIDAZO!"

Después de una derrota:

"💀 ESTA VEZ NO PUDO SER..."

Antes de semifinales:

"🏆 YA HUELE A FINAL..."

Antes de la final:

"👑 SOLO QUEDAN DOS..."

Al finalizar:

"🏆 TENEMOS CAMPEÓN"

Estas frases pueden aparecer aleatoriamente para hacer cada experiencia diferente.

---

# 35. SONIDOS

Si la carpeta contiene sonidos, utilizarlos.

Si no existen, dejar preparada la arquitectura para añadir:

* sonido de sorteo
* sonido de gol
* sonido de victoria
* sonido de eliminación
* sonido de final
* sonido de campeón

Agregar un botón global:

🔊 SONIDO ON/OFF

No reproducir sonidos automáticamente si el navegador los bloquea; permitir activarlos mediante interacción del usuario.

---

# 36. REQUISITO ESPECIAL: NO HACER UNA APP ABURRIDA

Este punto es MUY IMPORTANTE.

No quiero simplemente:

* tablas
* formularios
* botones
* texto
* bracket básico

Quiero una aplicación que cuando alguien la vea diga:

### "¿QUÉ ES ESTA CHIMBA? 🔥"

Debe sentirse como un videojuego de torneo.

Debe tener:

🎮 Interactividad
⚽ Fútbol
🔥 Competencia
🏆 Premios
🎲 Azar
💀 Eliminaciones
👑 Campeón
✨ Animaciones
📊 Estadísticas
🎥 Modo espectador

---

# 37. RESULTADO FINAL ESPERADO

Construir una aplicación web funcional completa llamada:

# TORNEO DE FIFA LA GANGA

La aplicación debe permitir realizar un torneo completo desde cero hasta coronar al campeón.

Debe ser visualmente atractiva, moderna, rápida, responsive y divertida.

Antes de escribir código:

1. Analiza la carpeta proporcionada.
2. Explica brevemente qué tecnologías y estructura encontraste.
3. Identifica qué recursos existentes pueden reutilizarse.
4. Define la arquitectura que utilizarás.
5. Después comienza a implementar.

No reemplaces innecesariamente el proyecto existente.

Reutiliza todo lo que sea útil.

Al finalizar:

* Ejecuta/verifica la aplicación.
* Corrige errores.
* Verifica que el sorteo funcione.
* Verifica que los enfrentamientos funcionen.
* Verifica que el sistema de eliminación funcione.
* Verifica el sistema de mejor perdedor.
* Verifica el bracket.
* Verifica el registro de resultados.
* Verifica que el campeón se determine correctamente.
* Verifica que los datos sobrevivan a una recarga.
* Verifica el diseño responsive.

La prioridad debe ser:

### 1. FUNCIONALIDAD

### 2. EXPERIENCIA DE USUARIO

### 3. DISEÑO

### 4. ANIMACIONES

### 5. CÓDIGO LIMPIO Y ESCALABLE
