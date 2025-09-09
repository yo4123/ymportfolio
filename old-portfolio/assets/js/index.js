


 
 


  function sendmail(event) {
            // Prevenir el envío normal del formulario
            event.preventDefault();
            
            // Obtener los valores del formulario
            const fullName = document.getElementById('fname').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            // Validar campos requeridos
            if (!fullName.trim() || !comment.trim()) {
                alert('Por favor, complete los campos requeridos (Nombre completo y Comentario).');
                return false;
            }
            
            // Construir el asunto del email
            const subject = `Nuevo mensaje de contacto de ${fullName}`;
            
            // Construir el cuerpo del email
            let body = `Nuevo mensaje de contacto:\n\n`;
            body += `Nombre completo: ${fullName}\n`;
            body += `Email: ${email || 'No proporcionado'}\n`;
            body += `Comentario:\n${comment}\n\n`;
            body += `---\n`;
            body += `Mensaje enviado desde el formulario de contacto del sitio web`;
            
            // Codificar los parámetros para la URL
            const encodedSubject = encodeURIComponent(subject);
            const encodedBody = encodeURIComponent(body);
            
            // Crear el enlace mailto
            const mailtoLink = `mailto:myovani@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
            
            // Abrir el cliente de correo
            window.location.href = mailtoLink;
            
            // Opcional: Mostrar mensaje de confirmación
            setTimeout(() => {
                alert('Se ha abierto tu cliente de correo. Por favor, envía el mensaje desde allí.');
                // Opcional: Limpiar el formulario después de enviar
                document.getElementById('form1').reset();
            }, 100);
            
            return false;
        }
    
    
     