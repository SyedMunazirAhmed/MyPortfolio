package dev.portfolio.server.project;

import org.springframework.data.jpa.repository.JpaRepository;

/** Spring Data generates the implementation: findAll, findById, save, deleteById, ... */
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
