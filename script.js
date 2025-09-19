function updateDashboardStats() {
      const availableCount = document.querySelectorAll('.parking-spot.available').length;
      const occupiedCount = document.querySelectorAll('.parking-spot.occupied').length;
      const totalCount = availableCount + occupiedCount;

      document.querySelectorAll('.stat-card h3')[0].textContent = totalCount;
      document.querySelectorAll('.stat-card h3')[1].textContent = availableCount;
      document.querySelectorAll('.stat-card h3')[2].textContent = occupiedCount;
    }

    // Simulasi update status setiap 5 detik
    setInterval(() => {
      const spots = document.querySelectorAll('.parking-spot');
      const randomIndex = Math.floor(Math.random() * spots.length);
      const spot = spots[randomIndex];

      const statuses = ['available', 'occupied'];
      let currentStatus = spot.classList.contains('available') ? 'available' : 'occupied';
      let newStatus;

      do {
        newStatus = statuses[Math.floor(Math.random() * statuses.length)];
      } while (newStatus === currentStatus);

      // Hanya ubah status, jangan hapus petunjuk spot
      spot.classList.remove('available', 'occupied');
      spot.classList.add(newStatus);

      const statusText = spot.querySelector('.parking-status');
      statusText.textContent = newStatus === 'available' ? 'Tersedia' : 'Terisi';

      updateDashboardStats();
    }, 5000);

    // Panggil pertama kali
    updateDashboardStats();