let complaints = [];

document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const desc = document.getElementById('desc').value;
    const urgency = document.getElementById('urgency').value;
    const file = document.getElementById('attachments').files[0];
    const fileName = file ? file.name : 'None';

    const complaint = {
        id: Date.now(),
        type: type,
        description: desc,
        urgency: urgency,
        attachment: fileName,
        status: 'Pending'
    };
    complaints.push(complaint);
    alert('Complaint submitted successfully!');
    document.getElementById('complaintForm').reset();
    displayComplaints();
});

function displayComplaints() {
    const list = document.getElementById('complaintsList');
    list.innerHTML = '';
    complaints.forEach(complaint => {
        const item = document.createElement('div');
        item.className = 'complaint-item';
        item.innerHTML = `
            <h3>${complaint.type} (ID: ${complaint.id})</h3>
            <p><strong>Description:</strong> ${complaint.description}</p>
            <p><strong>Urgency:</strong> ${complaint.urgency}</p>
            <p><strong>Attachment:</strong> ${complaint.attachment}</p>
            <p><strong>Status:</strong> ${complaint.status}</p>
        `;
        list.appendChild(item);
    });
}

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    const tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
