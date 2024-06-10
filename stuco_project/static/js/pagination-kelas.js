$(document).ready(function () {
	var $dataItems = $(".card"); // Mengambil semua item data
	var currentPage = 1;
	var recordsPerPage = 8; // Jumlah data per halaman

	// Fungsi untuk menampilkan data sesuai dengan halaman saat ini
	function displayData() {
		var start = (currentPage - 1) * recordsPerPage;
		var end = start + recordsPerPage;

		$dataItems.hide(); // Sembunyikan semua item data
		$dataItems.slice(start, end).show(); // Tampilkan item data sesuai halaman
	}

	// Fungsi untuk menampilkan tombol pagination
	function displayPagination() {
		var pageCount = Math.ceil($dataItems.length / recordsPerPage);
		var paginationHtml = "";

		// Tombol "Previous"
		paginationHtml += '<button class="pagination-button';
		if (currentPage === 1) {
			paginationHtml += "  cursor-not-allowed text-neutral-300 ";
		} else {
			paginationHtml += " text-orange-500";
		}
		paginationHtml +=
			' px-4 py-2 rounded-l-full mx-1" id="prev-btn">PREV</button>';

		// Tombol halaman
		for (var i = 1; i <= pageCount; i++) {
			paginationHtml += '<button class="pagination-button';
			if (i === currentPage) {
				paginationHtml += " bg-orange-500 text-white";
			} else {
				paginationHtml += " bg-gray-100 border text-gray-800";
			}
			paginationHtml += ' px-4 py-2 mx-1 rounded-full">' + i + "</button>";
		}

		// Tombol "Next"
		paginationHtml += '<button class="pagination-button';
		if (currentPage === pageCount || pageCount === 0) {
			paginationHtml += " text-neutral-300 cursor-not-allowed";
		} else {
			paginationHtml += " text-orange-500";
		}
		paginationHtml +=
			' px-4 py-2 rounded-r-full mx-1" id="next-btn">NEXT</button>';

		$("#pagination-container").html(paginationHtml);
	}

	// Menampilkan data dan pagination saat pertama kali halaman dimuat
	displayData();
	displayPagination();

	// Event listener untuk tombol pagination
	$(document).on("click", ".pagination-button", function () {
		var $button = $(this);
		if (!$button.hasClass("cursor-not-allowed")) {
			if ($button.attr("id") === "prev-btn") {
				currentPage--;
			} else if ($button.attr("id") === "next-btn") {
				currentPage++;
			} else {
				currentPage = parseInt($button.text());
			}
			displayData();
			displayPagination();
		}
	});
});
