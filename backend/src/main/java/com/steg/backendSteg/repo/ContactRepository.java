package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
}
