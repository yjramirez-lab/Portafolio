---
name: creador-de-habilidades
description: Crea nuevas habilidades (skills) para modificar el comportamiento del agente Antigravity, enseñarle nuevos procesos, o estandarizar cómo maneja ciertas tareas. Usar cuando el usuario pida "crear una habilidad", "crear un skill" o usar un "creador de habilidades".
---

# Creador de Habilidades

Eres un agente capaz de **crear nuevas habilidades** para extender el comportamiento y las directrices de Antigravity. Cuando el usuario te pida crear una nueva habilidad (skill), sigue estos pasos e instrucciones estrictamente.

## 1. Dónde ubicar la habilidad
Las habilidades pueden residir a nivel del proyecto o global. Por defecto, créalas en el nivel de proyecto del usuario, en el directorio `.agents/skills/<nombre-de-la-habilidad>/`.
- *Opcional*: Si el usuario pide que sea global, créala en `%APPDATA%\antigravity\skills\` (Windows) o `~/.config/antigravity/skills/` (macOS/Linux).

## 2. Estructura de la habilidad
Cada habilidad DEBE tener un archivo principal llamado `SKILL.md` dentro de su carpeta. 
De manera opcional, puedes crear directorios adicionales dentro de la carpeta de la habilidad si el caso de uso lo amerita:
- `scripts/`: Para scripts auxiliares o de Bash que la habilidad pueda necesitar.
- `templates/`: Para plantillas de archivos base.

## 3. Formato del archivo SKILL.md
El archivo **DEBE** comenzar con un bloque *Frontmatter* en YAML y luego continuar con el contenido Markdown.

### Bloque Frontmatter YAML
```yaml
---
name: nombre-de-la-habilidad
description: Una descripción detallada de qué hace la habilidad y CUÁNDO el agente debe usarla. (Las descripciones claras son muy importantes para que Antigravity sepa en qué contexto activarla).
---
```
*(Nota: usa "kebab-case" para el campo name de la habilidad en el YAML y en el nombre de la carpeta).*

### Contenido Markdown
Después del YAML, utiliza el Markdown estándar para definir las instrucciones de la habilidad. Deberías incluir secciones como:
- **Cuándo usar esta habilidad**: Ayuda a entender mejor el contexto de disparo.
- **Cómo usarla (Instrucciones)**: Pasos detallados que el agente debe seguir al usar la habilidad.
- **Checklists o Consejos**: Para evitar que el agente olvide detalles importantes de configuración.

## 4. Mejores Prácticas (Best Practices)
- **Mantén las habilidades enfocadas**: Cada habilidad debe estar diseñada para hacer *una sola cosa bien*. No crees habilidades que resuelvan múltiples problemas a la vez (evita habilidades "cajón de sastre").
- **Escribe descripciones claras**: Usa palabras clave específicas en el campo `description` del YAML para que el agente la detecte fácilmente cuando el usuario lo solicite.
- **Scripts de caja negra (Black boxes)**: Si la habilidad utiliza scripts dentro de `scripts/`, instruye al agente a ejecutarlos con el parámetro `--help` en lugar de intentar leer o modificar el código fuente del script para ahorrar contexto.
- **Árboles de decisión**: Si se trata de una tarea compleja, utiliza encabezados y listas para construir un flujo de decisiones claro, guiando al agente a tomar un camino u otro dependiendo de las condiciones.

## Ejemplo de Respuesta al Usuario
Al terminar de crear una nueva habilidad, confirma al usuario la ubicación exacta de la carpeta creada, muestra un sumario del `SKILL.md` que generaste y pregúntale si hay algún ajuste extra que quiera añadir para afinarla.
