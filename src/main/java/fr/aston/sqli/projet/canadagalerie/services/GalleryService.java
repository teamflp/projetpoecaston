package fr.aston.sqli.projet.canadagalerie.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import fr.aston.sqli.projet.canadagalerie.dao.IGalleryRepository;
import fr.aston.sqli.projet.canadagalerie.models.nosql.Gallery;

@Service
public class GalleryService {
	
	@Autowired
	private IGalleryRepository galleryRepository;
	
	public List<Gallery> findAllWorks(){
		return galleryRepository.findAll();
	}
	
//	public List<Gallery>  findWorkByTitre(String titre) {
//		
//		List<Gallery> works = galleryRepository.findWorkByTitre(titre);
//		return works;
//	}

}
