import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from logging.config import fileConfig
from alembic import context
from sqlalchemy import engine_from_config, pool
from app.core.database import Base
import app.models.base  # noqa: ensure models registered

config = context.config
if config.config_file_name:
    fileConfig(config.config_file_name)
target_metadata = Base.metadata
sync_url = os.getenv("SYNC_DATABASE_URL", "postgresql+psycopg2://user:password@db:5432/gombe_summit")
config.set_main_option("sqlalchemy.url", sync_url)

def run_migrations_offline():
    context.configure(url=sync_url, target_metadata=target_metadata, literal_binds=True, compare_type=True)
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    connectable = engine_from_config({"sqlalchemy.url": sync_url}, prefix="sqlalchemy.", poolclass=pool.NullPool)
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata, compare_type=True)
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
